class CreateTransactionListings < ActiveRecord::Migration[5.2]
  def change
    create_table :transaction_listings do |t|
      t.integer :transaction_id, null: false
      t.integer :listing_id, null: false

      t.timestamps
    end
  end
end
