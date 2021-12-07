class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create
    # post '/login'
    def create
        trainer = Trainer.find_by(username: params[:username])
        if trainer&.authenticate(params[:password])
            session[:trainer_id] = trainer.id
            render json: trainer, status: :ok
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    # delete '/logout'
    def destroy
        session.delete :trainer_id
        head :no_content
    end
end