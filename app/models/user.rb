class User < ApplicationRecord
  has_many :projects
  has_many :employers
  has_secure_password
end
