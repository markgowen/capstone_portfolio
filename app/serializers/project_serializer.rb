class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :desc, :framework_1, :framework_2, :framework_3, :framework_4, :framework_5, :link
  has_one :user
end
