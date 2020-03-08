# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  session_token   :string           not null
#  password_digest :string           not null
#  email           :string           not null
#  zipcode         :string           not null
#  birthday        :date
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  firstname       :string
#  lastname        :string
#
class User < ApplicationRecord
    validates :firstname, presence: true
    validates :lastname, presence: true
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :zipcode, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token
    has_many_attached :user_photo

    attr_reader :password
    
    # active storage association
    has_one_attached :photo

    has_many :reviews,
        foreign_key: :author_id,
        class_name: :Review

    has_many :saved_relational_businesses,
        foreign_key: :user_id,
        class_name: :SavedBusiness
    
    has_many :saved_businesses,
        through: :saved_relational_businesses,
        source: :business

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)    
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    # private
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end
end
