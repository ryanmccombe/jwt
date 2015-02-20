class User < ActiveRecord::Base
  has_many :links

  before_save :downcase_email

  has_secure_password
  validates :password, length: {minimum: 8}, allow_blank: true
  validates :email, presence: true, length: {maximum: 255}, uniqueness: {case_sensitive: false}


  def as_json(options={})
    super(:only => [:email, :admin])
  end

  private
  def downcase_email
    self.email = email.downcase
  end
end
