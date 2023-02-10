class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :desc, :frameworks, :website, :github
  has_one :user
end
