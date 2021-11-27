class AddPasswordToTrainer < ActiveRecord::Migration[6.1]
  def change
    add_column :trainers, :password, :string
  end
end
