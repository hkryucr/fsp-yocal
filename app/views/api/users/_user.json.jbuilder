
json.extract! user, :id, :email, :zipcode, :firstname, :lastname, :birthday

json.savedBusinesses do 
    json.array! (user.saved_businesses.map(&:id))    
end

json.photoUrl url_for(user.user_photo[0])
