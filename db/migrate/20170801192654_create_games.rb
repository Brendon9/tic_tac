class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.string :winner
      t.string :mode
      t.integer :scoring_index

      t.timestamps
    end
  end
end
