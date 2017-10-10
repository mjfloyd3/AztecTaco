require 'sinatra' 

#get request root path

get("/") do
	erb :home
end

get "/:title" do
	@title = params[:title]
	@content = page_content(@title)
	erb :contact
end
