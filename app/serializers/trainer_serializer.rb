class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :name, :skill, :credential, :username, :password_digest
end
