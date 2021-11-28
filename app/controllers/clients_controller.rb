class ClientsController < ApplicationController
    before_action :set_client, only: [:update, :destroy] 

    def index 
        client = Client.all
        render json: client, status: :ok
    end

    def show
        client = Client.find_by(id: params[:id])
        render json: client, status: :ok
    end

    def create
        client = Client.create!(client_params)
        render json: client, status: :created
    end

    def update
        @client = Client.update(client_params)
        render json: @client, status: :accepted
    end

    def destroy
        @client.destroy
        head :no_content, status: :ok
     end

    private

    def client_params
        params.require(:client).permit(:name, :number, :img_url)
    end

    def set_client
        @client = Client.find_by(id: params[:id])
    end
end
