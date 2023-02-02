class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.string :desc
      t.string :framework_1
      t.string :framework_2
      t.string :framework_3
      t.string :framework_4
      t.string :framework_5
      t.string :link

      t.timestamps
    end
  end
end
