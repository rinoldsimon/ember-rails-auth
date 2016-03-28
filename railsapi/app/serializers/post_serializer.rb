class PostSerializer < ActiveModel::Serializer
  #embed :ids
  embed :ids, :include => true
  #embed :ids, embed_in_root: true
  attributes :id, :title, :body

  has_many :comments
end
