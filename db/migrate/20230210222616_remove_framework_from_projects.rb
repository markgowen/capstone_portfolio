class RemoveFrameworkFromProjects < ActiveRecord::Migration[7.0]
  def change
    remove_column :projects, :framework_4, :string
  end
end
