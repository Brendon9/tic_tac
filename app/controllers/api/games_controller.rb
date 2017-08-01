class Api::GamesController < ApplicationController
  respond_to :json
  
  def index
    @games = Game.all
    render json: @games
  end

  def create
    @game = Game.new(game_params)

    if @game.save
      render json: @game, status: :created
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  private

  # Only allow a trusted parameter "white list" through.
  def game_params
    ActiveModelSerializers::Deserialization.jsonapi_parse(params)
  end
end
