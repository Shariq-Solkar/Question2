<%@ page import="java.util.Date" %>
<!DOCTYPE html>
<html>
<head>
    <title>Current Date and Time</title>
</head>
<body>
    <h2>Current Date and Time</h2>
    <p>
        <% 
            Date currentDate = new Date();
            out.println("Current date and time: " + currentDate.toString());
        %>
    </p>
</body>
</html>
