class CreateTrainers < ActiveRecord::Migration[6.1]
  def change
    create_table :trainers do |t|
      t.string :name
      t.string :skill
      t.string :credential
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
