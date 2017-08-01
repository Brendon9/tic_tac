class GameSerializer < ActiveModel::Serializer
  attributes :winner, :mode, :scoring_index, :created_at
end
