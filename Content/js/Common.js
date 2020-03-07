$(document).ready(function () {

    $("#ApplicationType").change(function () {
        var applicationId = $("#ApplicationType option:selected").text();
        var droneId = $("#DroneId");
        var VersionId = $("#VersionId");

        $.ajax({
            url: "/DroneConfig/GetApplicationVersionCodeJsonResult/?applicationName=" + applicationId + "&droneId=" + droneId,
            type: "get",
            dataType: "json",
            contentType: "application/json",
            success: function (result) {
                var options = "";
                VersionId.html("");
                $.each(result, function (i, data) {
                    options += "<option value=" + data.VersionId + ">" + data.VersionCode + "</option>";
                });
                VersionId.append(options);
            }
        });
    });
});