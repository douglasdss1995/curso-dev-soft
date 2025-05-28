package com.cursodedesenvolvimentodesoftware.somadoisnumeros.views

import android.widget.Toast
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.cursodedesenvolvimentodesoftware.somadoisnumeros.ui.theme.Green
import com.cursodedesenvolvimentodesoftware.somadoisnumeros.ui.theme.White

@OptIn(ExperimentalMaterial3Api::class)
@Composable()
fun SomaDoisNumeros(
    modifier: Modifier,
) {
    var number1 by remember { mutableStateOf("") }
    var number2 by remember { mutableStateOf("") }
    val sum by remember { mutableStateOf("") }


    val context = LocalContext.current


    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Text(
                        text = "Soma de dois número",
                        fontSize = 18.sp
                    )
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = Green,
                    titleContentColor = White
                ),
            )
        },
        content = { innerPadding ->
            Column(
                modifier = modifier
                    .padding(innerPadding)
                    .padding(horizontal = 10.dp)
            ) {
                OutlinedTextField(
                    value = number1,
                    onValueChange = {
                        number1 = it
                    },
                    label = { Text("Digite um número") },
                    modifier = Modifier
                        .padding(
                            bottom = 20.dp
                        )
                        .fillMaxWidth(),
                )

                OutlinedTextField(
                    value = number2,
                    onValueChange = {
                        number2 = it
                    },
                    label = {  Text("Digite um número") },
                    modifier = Modifier
                        .padding(
                            bottom = 20.dp
                        )
                        .fillMaxWidth(),
                )

                Button(
                    onClick = {
                        val soma = (number1.toInt() + number2.toInt()).toString()
                        Toast.makeText(
                            context,
                            "Resultado: $soma",
                            Toast.LENGTH_LONG
                        ).show()
                    },
                    colors = ButtonDefaults.buttonColors(
                        containerColor = Green,
                        contentColor = White
                    ),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Text("Somar")
                }
                Text(sum,
                    fontSize = 100.sp,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.fillMaxWidth())

            }
        }
    )
}