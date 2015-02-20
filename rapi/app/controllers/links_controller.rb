class LinksController < ApplicationController
  require 'auth_token'

  def index
    # @links = [
    #     {name: 'Google', url: 'http://www.google.com'},
    #     {name: 'Yahoo', url: 'http://www.yahoo.com'},
    #     {name: 'Amazon', url: 'http://www.amazon.com'},
    #     {name: 'Twitter', url: 'http://www.twitter.com'}
    # ]

    @links = Link.all

    @user = get_user(request.headers)

    render json: {user: @user, links: @links}

  end

  def create
    user = get_user(request.headers)
    if user
      link = Link.create(name: params[:link][:name], url: params[:link][:url], user_id: user.id)
      if link.save
        render json: link
      else
        render json: link.errors.full_messages, status: 400
      end
    else
      render json: {message: 'Only registered users can submit links'}, status: 401
    end

  end

  def destroy
    user = get_user(request.headers)
    if user.admin
      link = Link.find(params[:id])
      link.destroy
      render json: link
    else
      render json: {message: 'Only an administrator can delete links'}, status: 401
    end
  end

  def get_user(headers)
    if headers['Authorization'].nil?
      false
    else
      token = AuthToken.valid?(headers['Authorization'].split(' ').last)
      if token
        token.inspect
        User.find(token[0]['user_id'])
      end
    end
  end

  # def link_params
  #   params.require(:link).permit(:name, :url)
  # end

end
