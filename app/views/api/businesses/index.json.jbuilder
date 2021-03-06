json.businessItems do 
    @businesses.each do |business| 
        json.set! business.id do
            json.partial! "api/businesses/business", business: business
        end
    end
end

json.business_list (@business_list)
json.category_list (@category_list)
