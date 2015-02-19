class LinksController < ApplicationController
  require 'auth_token'

  def index
    @links = [
        {name: 'Google', url: 'http://www.google.com'},
        {name: 'Yahoo', url: 'http://www.yahoo.com'},
        {name: 'Amazon', url: 'http://www.amazon.com'},
        {name: 'Twitter', url: 'http://www.twitter.com'}
    ]

    @user = get_user(request.headers)

    render json: {user: @user, links: @links}

  end

  def create

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
end
