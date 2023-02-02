class CreateEmployers < ActiveRecord::Migration[7.0]
  def change
    create_table :employers do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.string :location
      t.string :role
      t.string :time_employed
      t.string :desc_1
      t.string :desc_2
      t.string :desc_3
      t.string :desc_4
      t.string :desc_5

      t.timestamps
    end
  end
end
