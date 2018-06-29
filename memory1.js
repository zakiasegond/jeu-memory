$(function()
{
	$('dos').click(function()
	{
			if($(this).attr('src')=='dos.png')
			$(this).attr('src','arg.png');
			// else
			// $(this).attr('src','dos.png')
	});
});