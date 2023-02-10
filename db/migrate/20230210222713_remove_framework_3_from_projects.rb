class RemoveFramework3FromProjects < ActiveRecord::Migration[7.0]
  def change
    remove_column :projects, :framework_3, :string
  end
end
