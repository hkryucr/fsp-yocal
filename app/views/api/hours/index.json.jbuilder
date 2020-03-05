@hours.each do |hour| 
    json.set! hour.id do
        json.partial! "api/hours/hour", hour: hour
    end
end