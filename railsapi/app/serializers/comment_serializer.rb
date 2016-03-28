class CommentSerializer < ActiveModel::Serializer
  #embed :ids, :include => true
  #embed :ids, embed_in_root: true
  attributes :id, :author, :body, :post_id
  ##belongs_to :post
  #has_one :post
  #has_one :post_id
end
