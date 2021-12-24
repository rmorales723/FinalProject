class AddRatingToClients < ActiveRecord::Migration[6.1]
  def change
    add_column :clients, :rating, :integer
  end
end
