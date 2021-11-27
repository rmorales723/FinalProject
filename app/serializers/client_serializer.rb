class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :number, :img_url, :trainer_id, :foreign_key
end
