json.extract! review, :id, :author_id, :business_id, :business_name, :rating, :text, :review_date, :useful, :funny, :cool

# json.photoUrls do
#     json.array!(review.review_photo) do |photo|
#         json.photoUrl url_for(photo)
#     end
# end

if(review.review_photo[0])
    json.photoUrl url_for(review.review_photo[0])
end
