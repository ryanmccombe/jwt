class UsersController < ApplicationController
  require 'auth_token'

  def create
    @user = User.new(user_params)
    if @user.save
      token = AuthToken.issue_token({ user_id: @user.id })
      render json: {user: @user, token: token}
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

end
