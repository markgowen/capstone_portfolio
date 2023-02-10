class RemoveFramework2FromProjects < ActiveRecord::Migration[7.0]
  def change
    remove_column :projects, :framework_2, :string
  end
end
