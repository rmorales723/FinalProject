class TrainersController < ApplicationController
    before_action :set_trainer, only: [:update, :destroy] 
    # skip_before_action :authorized, only: :create

    def index 
        trainer = Trainer.all
        render json: trainer, status: :ok
    end

    def show
        trainer = Trainer.find_by(id: params[:id])
        render json: trainer, status: :ok
    end

    def create
        trainer = Trainer.create!(trainer_params)
        render json: trainer, status: :created
    end

    def update
        @trainer = Trainer.update(trainer_params)
        render json: @trainer, status: :accepted
    end

    def destroy
        @trainer.destroy
        head :no_content, status: :ok
     end

    private

    def trainer_params
        params.require(:trainer).permit(:name, :skill, :credential)
    end

    def set_trainer
        @trainer = Trainer.find_by(id: params[:id])
    end
end
