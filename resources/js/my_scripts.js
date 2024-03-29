/*
	players is an array to hold each player's information.
	Fields:
		name - Football player's name
		img  - The relative/absolute path to the image file.
		alt  - The alternative text that describes the image.
		year - The student's year in college (Freshman, Sophomore, Junior, Senior).
		major- The student's current college major.
		games_played    - The number of football games the student has played for the Buffs.
		pass_yards      - The total number of passing yards in the student's football career for the Buffs.
		rushing_yards   - The total number of rushing yards in the student's football career for the Buffs.
		receiving_yards - The total number of receiving yards in the student's football career for the Buffs.
*/
var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];

function viewStudentStats(id, toggle)
{
	if(toggle == 0)
	{
		document.getElementById(id).style.height = "0";
		document.getElementById(id).style.visibility = "collapse";
		document.getElementById(id).style.opacity = "0";
	}
	else
	{

		document.getElementById(id).style.height = "auto";
		document.getElementById(id).style.visibility = "visible";
	}
}

function changeColor(color)
{
	document.body.style.backgroundColor = color;
}

function loadStatsPage()
{
	var table = document.getElementById("stats_table");
	var win_cell = document.getElementById("wins");
	var loss_cell = document.getElementById("losses");

	var row_counter;
	var col_counter;
	var cell_value;
	var sto_val;

	var win_count = 0;
	var total_games = 0;

	for (row_counter = 0; row_counter < table.rows.length; row_counter++)
	{
		for(col_counter = 0; col_counter < table.rows[row_counter].cells.length; col_counter++)
		{
			if(row_counter >= 2 && col_counter == 2)
			{
				sto_val = table.rows[row_counter].cells[col_counter].innerHTML;
			}
			if(row_counter >= 2 && col_counter == 3)
			{
				cell_value = table.rows[row_counter].cells[col_counter].innerHTML;
			}
			if(row_counter >= 2 && col_counter == 4)
			{
				total_games++;
				if(parseInt(cell_value,10)>parseInt(sto_val,10))
				{
					table.rows[row_counter].cells[col_counter].innerHTML = table.rows[row_counter].cells[1].innerHTML;
				}
				else
				{
					table.rows[row_counter].cells[col_counter].innerHTML = "CU Boulder";
					win_count++;
				}
			}
		}
	}
	win_cell.innerHTML = win_count;
	loss_cell.innerHTML = total_games - win_count;
}

function switchPlayers(playerNum)
{
	document.getElementById('p_year').innerHTML = players[playerNum].year;
	document.getElementById('p_major').innerHTML = players[playerNum].major;
	document.getElementById('g_played').innerHTML = players[playerNum].games_played;
	document.getElementById('player_img').src = players[playerNum].img;
	document.getElementById('player_img').alt = players[playerNum].alt;
	document.getElementById('p_yards').innerHTML = players[playerNum].pass_yards;
	document.getElementById('r_yards').innerHTML = players[playerNum].rushing_yards;
	document.getElementById('rec_yards').innerHTML = players[playerNum].receiving_yards;
	document.getElementById('avg_p_yards').innerHTML = Math.floor(players[playerNum].pass_yards/players[playerNum].games_played);
	document.getElementById('avg_r_yards').innerHTML = Math.floor(players[playerNum].rushing_yards/players[playerNum].games_played);
	document.getElementById('avg_rec_yards').innerHTML = Math.floor(players[playerNum].receiving_yards/players[playerNum].games_played);
}

function loadPlayersPage()
{
	var select = document.getElementById("player_selector");
	var newPlayer = "";
	for(i = 0; i < players.length; i++)
	{
		 var temp = players[i].name;
	   newPlayer = newPlayer + "<a class = 'dropdown-item' href='#' onclick = 'switchPlayers("+ i +")'>" + temp +"</a>"
	}
	select.innerHTML = newPlayer;
}
