class EmployerSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :role, :time_employed, :desc_1, :desc_2, :desc_3, :desc_4, :desc_5
  has_one :user
end
