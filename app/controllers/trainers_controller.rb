class TrainersController < ApplicationController
    before_action :set_trainer, only: [:update, :destroy] 
    
    def index   
        render json: Trainer.all, status: :ok
    end

    def show
        trainer = Trainer.find_by(id: params[:id])
        if trainer
            render json: trainer, status: :ok
         else
           render json: { error: "Not authorized" }, status: :unauthorized
         end
    end

    def create
        trainer = Trainer.create!(trainer_params)
        session[:trainer_id] = trainer.id
        render json: trainer, status: :created
    end

    def update
        @trainer.update!(trainer_params)
        render json: @trainer, status: :ok
     end

     def destroy
        @trainer.destroy
        head :no_content, status: :ok
    end

    private

    def trainer_params
        params.require(:trainer).permit(:name, :username, :credential, :password, :skill, :id)
    end

    def set_trainer
        @trainer = Trainer.find_by(id: params[:id])
   end
end
