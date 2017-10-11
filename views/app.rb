require 'sinatra' 
#require 'sendgrid' (to do)

#set up routes

get("/") do
	erb :home
end

get ("/menu") do
	erb :menu
end

get ("/calendar") do
	erb :calendar
end

get ("contact") do
	erb :contact
end

post '/contact' do
	params.to_s
end
