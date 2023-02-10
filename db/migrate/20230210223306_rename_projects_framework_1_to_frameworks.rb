class RenameProjectsFramework1ToFrameworks < ActiveRecord::Migration[7.0]
  def change
    rename_column :projects, :framework_1, :frameworks
  end
end
