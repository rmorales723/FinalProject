class ClientsController < ApplicationController
    before_action :set_client, only: [:show, :update, :destroy] 
    skip_before_action :authorized
    
    def index 
        @clients = Client.all
        render json: @clients, status: :ok
    end

    def show
        # client = Client.find_by(id: params[:id])
        render json: @client, status: :ok
    end

    def create
        client = Client.create!(client_params)
        render json: client, status: :created
    end

    def update
        @client = Client.find(params[:id])
        if @client.update(client_params)
            render json: @client, status: :accepted
        else
            render json: @client.errors.messages.join(", "), status: 422
        end
    end

    def destroy
        @client.destroy
        head :no_content, status: :ok
     end

    private

    def client_params
        params.require(:client).permit(:name, :number, :img_url, :email)
    end

    def set_client
        @client = Client.find_by(id: params[:id])
    end
end
