class AddNewFieldsToSong < ActiveRecord::Migration[7.1]
  def change
    add_column :songs, :speed, :string
    add_column :songs, :description, :text
  end
end
