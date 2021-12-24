class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :number, :img_url, :rating
end
