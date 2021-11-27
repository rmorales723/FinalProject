class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :name
      t.string :date
      t.string :time

      t.timestamps
    end
  end
end
