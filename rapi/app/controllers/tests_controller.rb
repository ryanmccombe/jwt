class TestsController < ApplicationController
  require 'auth_token'

  def register
    @user = User.new(user_params)
    if @user.save
      token = AuthToken.issue_token({ user_id: @user.id })
      render json: {email: @user.email, token: token}
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def jobs
    @jobs = ['Chef', 'Ninja', 'Accountant', 'Bus Driver']

    if request.headers['Authorization'].nil?
      render json: {message: 'No token'}, status: 401
    elsif !AuthToken.valid?(request.headers['Authorization'].split(' ').last)
      render json: {message: 'Invalid token'}, status: 401
    else
      render json: @jobs
    end
  end

  def login
    user = User.find_by(email: params[:user][:email].downcase)
    if user && user.authenticate(params[:user][:password])
      render json: user
    else
      render json: {message: 'Invalid login'}, status: 401
    end

  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end