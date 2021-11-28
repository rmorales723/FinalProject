class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password, :skill, :credential, :password_digest
end
