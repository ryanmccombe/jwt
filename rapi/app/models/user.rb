class User < ActiveRecord::Base
  before_save :downcase_email

  has_secure_password
  validates :password, length: {minimum: 6}, allow_blank: true
  validates :email, presence: true, length: {maximum: 255}, uniqueness: {case_sensitive: false}


  def as_json(options={})
    super(:only => [:id, :name, :email, :admin])
  end

  private
  def downcase_email
    self.email = email.downcase
  end
end
