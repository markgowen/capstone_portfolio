class RemoveFramework5FromProjects < ActiveRecord::Migration[7.0]
  def change
    remove_column :projects, :framework_5, :string
  end
end
