class ApplicationController < ActionController::API
    before_action :authorized
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_error
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_error
  
    def render_unprocessable_entity_error(error)
      render json: {errors: error.record.errors.full_messages}, status: :unprocessable_entity
    end
  
    def render_not_found_error(error)
      render json: {error: "record not found"}, status: :not_found
    end
  
    def set_client
      @client = Client.find(params[:id])
    end
  
    def authorized
     render json:{error: "Not Authorized"}, status: :unauthorized unless session.include? :trainer_id
    end
  
    def current_trainer
      current_trainer ||= session[:trainer_id] && Trainer.find_by_id(session[:trainer_id])
    end
end

