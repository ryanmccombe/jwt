class SessionsController < ApplicationController
  require 'auth_token'

  def create
    @user = User.find_by(email: params[:user][:email].downcase)
    if @user && @user.authenticate(params[:user][:password])
      token = AuthToken.issue_token({ user_id: @user.id })
      render json: {user: @user, token: token}
    else
      render json: {message: 'Invalid login'}, status: 401
    end
  end

end
