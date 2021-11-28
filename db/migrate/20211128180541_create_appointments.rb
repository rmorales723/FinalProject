class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :date
      t.string :time
      t.string :client_name
      t.string :trainer_id
      t.string :client_id

      t.timestamps
    end
  end
end
