var url = "http://localhost:8080/ventaPasajes/";

$(document).ready(function () {
    function getGET(){
        var loc = window.location.href;
        var getString = loc.split('?')[1];
        var GET = getString.split('&');
        var get = {};//this object will be filled with the key-value pairs and returned.

        for(var i = 0, l = GET.length; i < l; i++){
            var tmp = GET[i].split('=');
            get[tmp[0]] = unescape(decodeURI(tmp[1]));
        }
        return get;
    }
   
    var datos = getGET();
        $("#servicio").append
        ("<ul id='datosServicio'>" +
        "<li>Origen: " + datos.origen + "</li>" +
        "<li>Destino: " + datos.destino + "</li>" +
        "<li>Fecha: " + datos.fecha + "</li>" +
        "<li>Hora: " + datos.horaSalida + "</li>" +
        "<li>Valor: $" + datos.valor + "</li>" +
        "<li>Salón: " + datos.salon + "</li>" +
        "</ul>");


   $.getJSON(url + "rest/get_paraderosSubida.php?c=" + datos.idOrigen, function (result) {
        $.each(result, function (i, field) {
            $("#opcParadero").append("<option value='" + field.nombre + "'>" + field.nombre + "</option>");
        });

    });

    $.getJSON(url + "rest/get_bus.php?i="+datos.idBus, function (result) {
        $.each(result, function (i, field) {

            //Clasico
            if (field.capacidad == 44) {
                $("#tipoSalon").append("Salón Clásico");

                $("#salon").append(
                    "<tr id='fila1'>" +
                        "<td><label>3</label><input type='checkbox' id='3' value='3' name='asiento' ></td>" +
                        "<td><label>7</label><input type='checkbox' id='7' value='7' name='asiento' ></td>" +
                        "<td><label>11</label><input type='checkbox' id='11' value='11' name='asiento' ></td>" +
                        "<td><label>15</label><input type='checkbox' id='15' value='15' name='asiento' ></td>" +
                        "<td><label>19</label><input type='checkbox' id='19' value='19' name='asiento' ></td>" +
                        "<td><label>23</label><input type='checkbox' id='23' value='23' name='asiento' ></td>" +
                        "<td><label>27</label><input type='checkbox' id='27' value='27' name='asiento' ></td>" +
                        "<td><label>31</label><input type='checkbox' id='31' value='31' name='asiento' ></td>" +
                        "<td><label>35</label><input type='checkbox' id='35' value='35' name='asiento' ></td>" +
                        "<td><label>39</label><input type='checkbox' id='39' value='39' name='asiento' ></td>" +
                        "<td><label>43</label><input type='checkbox' id='43' value='43' name='asiento' ></td>" +
                    "</tr>" +

                    "<tr id='fila2'>" +
                        "<td><label>4</label><input type='checkbox' id='4' value='4' name='asiento' ></td>" +
                        "<td><label>8</label><input type='checkbox' id='8' value='8' name='asiento' ></td>" +
                        "<td><label>12</label><input type='checkbox' id='12' value='12' name='asiento' ></td>" +
                        "<td><label>16</label><input type='checkbox' id='16' value='16' name='asiento' ></td>" +
                        "<td><label>20</label><input type='checkbox' id='20' value='20' name='asiento' ></td>" +
                        "<td><label>24</label><input type='checkbox' id='24' value='24' name='asiento' ></td>" +
                        "<td><label>28</label><input type='checkbox' id='28' value='28' name='asiento' ></td>" +
                        "<td><label>32</label><input type='checkbox' id='32' value='32' name='asiento' ></td>" +
                        "<td><label>36</label><input type='checkbox' id='36' value='36' name='asiento' ></td>" +
                        "<td><label>40</label><input type='checkbox' id='40' value='40' name='asiento' ></td>" +
                        "<td><label>44</label><input type='checkbox' id='44' value='44' name='asiento' ></td>" +
                    "</tr>" +

                    "<tr id='pasillo'>" +
                        "<td>-</td>" +
                        "<td>-</td>" +
                        "<td>P</td>" +
                        "<td>A</td>" +
                        "<td>S</td>" +
                        "<td>I</td>" +
                        "<td>L</td>" +
                        "<td>L</td>" +
                        "<td>O</td>" +
                        "<td>-</td>" +
                        "<td>-</td>" +
                    "</tr>" +

                    "<tr id='fila3'>" +
                        "<td><label>2</label><input type='checkbox' id='2' value='2' name='asiento' ></td>" +
                        "<td><label>6</label><input type='checkbox' id='6' value='6' name='asiento' ></td>" +
                        "<td><label>10</label><input type='checkbox' id='10' value='10' name='asiento' ></td>" +
                        "<td><label>14</label><input type='checkbox' id='14' value='14' name='asiento' ></td>" +
                        "<td><label>18</label><input type='checkbox' id='18' value='18' name='asiento' ></td>" +
                        "<td><label>22</label><input type='checkbox' id='22' value='22' name='asiento' ></td>" +
                        "<td><label>26</label><input type='checkbox' id='26' value='26' name='asiento' ></td>" +
                        "<td><label>30</label><input type='checkbox' id='30' value='30' name='asiento' ></td>" +
                        "<td><label>34</label><input type='checkbox' id='34' value='34' name='asiento' ></td>" +
                        "<td><label>38</label><input type='checkbox' id='38' value='38' name='asiento' ></td>" +
                        "<td><label>42</label><input type='checkbox' id='42' value='42' name='asiento' ></td>" +
                    "</tr>" +

                    "<tr id='fila4'>" +
                        "<td><label>1</label><input type='checkbox' id='1' value='1' name='asiento' ></td>" +
                        "<td><label>5</label><input type='checkbox' id='5' value='5' name='asiento' ></td>" +
                        "<td><label>9</label><input type='checkbox' id='9' value='9' name='asiento' ></td>" +
                        "<td><label>13</label><input type='checkbox' id='13' value='13' name='asiento' ></td>" +
                        "<td><label>17</label><input type='checkbox' id='17' value='17' name='asiento' ></td>" +
                        "<td><label>21</label><input type='checkbox' id='21' value='21' name='asiento' ></td>" +
                        "<td><label>25</label><input type='checkbox' id='25' value='25' name='asiento' ></td>" +
                        "<td><label>29</label><input type='checkbox' id='29' value='29' name='asiento' ></td>" +
                        "<td><label>33</label><input type='checkbox' id='33' value='33' name='asiento' ></td>" +
                        "<td><label>37</label><input type='checkbox' id='37' value='37' name='asiento' ></td>" +
                        "<td><label>41</label><input type='checkbox' id='41' value='41' name='asiento' ></td>" +
                    "</tr>");

                $("#salon2").hide();
                $("#tipoSalon2").hide();
                
            }

            //Cama de 1 piso
            
            if (field.capacidad == 24) {
                $("#tipoSalon").append("Salón Cama");

                $("#salon").append(
                    "<tr id='fila1'>" +
                        "<td><label>3</label><input type='checkbox' id='3' value='3' name='asiento' ></td>" +
                        "<td><label>6</label><input type='checkbox' id='6' value='6' name='asiento' ></td>" +
                        "<td><label>9</label><input type='checkbox' id='9' value='9' name='asiento' ></td>" +
                        "<td><label>12</label><input type='checkbox' id='12' value='12' name='asiento' ></td>" +
                        "<td><label>15</label><input type='checkbox' id='15' value='15' name='asiento' ></td>" +
                        "<td><label>18</label><input type='checkbox' id='18' value='18' name='asiento' ></td>" +
                        "<td><label>21</label><input type='checkbox' id='21' value='21' name='asiento' ></td>" +
                        "<td><label>24</label><input type='checkbox' id='24' value='24' name='asiento' ></td>" +
                    "</tr>" +

                    "<tr id='pasillo'>" +
                        "<td>P</td>" +
                        "<td>A</td>" +
                        "<td>S</td>" +
                        "<td>I</td>" +
                        "<td>L</td>" +
                        "<td>L</td>" +
                        "<td>O</td>" +
                        "<td>-</td>" +
                    "</tr>" +

                    "<tr id='fila2'>" +
                        "<td><label>2</label><input type='checkbox' id='2' value='2' name='asiento' ></td>" +
                        "<td><label>5</label><input type='checkbox' id='5' value='5' name='asiento' ></td>" +
                        "<td><label>8</label><input type='checkbox' id='8' value='8' name='asiento' ></td>" +
                        "<td><label>11</label><input type='checkbox' id='11' value='11' name='asiento' ></td>" +
                        "<td><label>14</label><input type='checkbox' id='14' value='14' name='asiento' ></td>" +
                        "<td><label>17</label><input type='checkbox' id='17' value='17' name='asiento' ></td>" +
                        "<td><label>20</label><input type='checkbox' id='20' value='20' name='asiento' ></td>" +
                        "<td><label>23</label><input type='checkbox' id='23' value='23' name='asiento' ></td>" +
                    "</tr>" +

                    "<tr id='fila3'>" +
                        "<td><label>1</label><input type='checkbox' id='1' value='1' name='asiento' ></td>" +
                        "<td><label>4</label><input type='checkbox' id='4' value='4' name='asiento' ></td>" +
                        "<td><label>7</label><input type='checkbox' id='7' value='7' name='asiento' ></td>" +
                        "<td><label>10</label><input type='checkbox' id='10' value='10' name='asiento' ></td>" +
                        "<td><label>13</label><input type='checkbox' id='13' value='13' name='asiento' ></td>" +
                        "<td><label>16</label><input type='checkbox' id='16' value='16' name='asiento' ></td>" +
                        "<td><label>19</label><input type='checkbox' id='19' value='19' name='asiento' ></td>" +
                        "<td><label>22</label><input type='checkbox' id='22' value='22' name='asiento' ></td>" +
                    "</tr>");

                $("#salon2").hide();
                $("#tipoSalon2").hide();
                
            }

            //Cama 1er piso
            if (field.capacidad == 12) {
                $("#tipoSalon").append("Salón Cama 1er Piso");
                
                $("#salon").append(
                "<tr id='fila1'>" +
                        "<td><label>3</label><input type='checkbox' id='3' value='3' name='asiento' ></td>" +
                        "<td><label>6</label><input type='checkbox' id='6' value='6' name='asiento' ></td>" +
                        "<td><label>9</label><input type='checkbox' id='9' value='9' name='asiento' ></td>" +
                        "<td><label>12</label><input type='checkbox' id='12' value='12' name='asiento' ></td>" +
                    "</tr>" +

                    "<tr id='pasillo'>" +
                        "<td>PA</td>" +
                        "<td>SI</td>" +
                        "<td>LL</td>" +
                        "<td>O</td>" +
                    "</tr>" +

                    "<tr id='fila2'>" +
                        "<td><label>2</label><input type='checkbox' id='2' value='2' name='asiento' ></td>" +
                        "<td><label>5</label><input type='checkbox' id='5' value='5' name='asiento' ></td>" +
                        "<td><label>8</label><input type='checkbox' id='8' value='8' name='asiento' ></td>" +
                        "<td><label>11</label><input type='checkbox' id='11' value='11' name='asiento' ></td>" +
                    "</tr>" +

                    "<tr id='fila3'>" +
                        "<td><label>1</label><input type='checkbox' id='1' value='1' name='asiento' ></td>" +
                        "<td><label>4</label><input type='checkbox' id='4' value='4' name='asiento' ></td>" +
                        "<td><label>7</label><input type='checkbox' id='7' value='7' name='asiento' ></td>" +
                        "<td><label>10</label><input type='checkbox' id='10' value='10' name='asiento' ></td>" +
                    "</tr>");

                $("#salon2").hide();
                $("#tipoSalon2").hide();
            
            }

            //Semi-cama 2do piso
            if (field.capacidad == 48) {
                $("#tipoSalon").append("Salón Semi-Cama 2do Piso");
                
                $("#salon").append(
                    "<tr id='fila1'>" +
                        "<td><label>15</label><input type='checkbox' id='15' value='15' name='asiento' ></td>" +
                        "<td><label>19</label><input type='checkbox' id='19' value='19' name='asiento' ></td>" +
                        "<td></td>" +
                        "<td></td>" +
                        "<td><label>27</label><input type='checkbox' id='27' value='27' name='asiento' ></td>" +
                        "<td><label>31</label><input type='checkbox' id='31' value='31' name='asiento' ></td>" +
                        "<td><label>35</label><input type='checkbox' id='35' value='35' name='asiento' ></td>" +
                        "<td><label>39</label><input type='checkbox' id='39' value='39' name='asiento' ></td>" +
                        "<td><label>43</label><input type='checkbox' id='43' value='43' name='asiento' ></td>" +
                        "<td><label>47</label><input type='checkbox' id='47' value='47' name='asiento' ></td>" +
                        "<td><label>51</label><input type='checkbox' id='51' value='51' name='asiento' ></td>" +
                        "<td><label>55</label><input type='checkbox' id='55' value='55' name='asiento' ></td>" +
                        "<td><label>59</label><input type='checkbox' id='59' value='59' name='asiento' ></td>" +
                    "</tr>" +

                    "<tr id='fila2'>" +
                        "<td><label>16</label><input type='checkbox' id='16' value='16' name='asiento' ></td>" +
                        "<td><label>20</label><input type='checkbox' id='20' value='20' name='asiento' ></td>" +
                        "<td></td>" +
                        "<td></td>" +
                        "<td><label>28</label><input type='checkbox' id='28' value='28' name='asiento' ></td>" +
                        "<td><label>32</label><input type='checkbox' id='32' value='32' name='asiento' ></td>" +
                        "<td><label>36</label><input type='checkbox' id='36' value='36' name='asiento' ></td>" +
                        "<td><label>40</label><input type='checkbox' id='40' value='40' name='asiento' ></td>" +
                        "<td><label>44</label><input type='checkbox' id='44' value='44' name='asiento' ></td>" +
                        "<td><label>48</label><input type='checkbox' id='48' value='48' name='asiento' ></td>" +
                        "<td><label>52</label><input type='checkbox' id='52' value='52' name='asiento' ></td>" +
                        "<td><label>56</label><input type='checkbox' id='56' value='56' name='asiento' ></td>" +
                        "<td><label>60</label><input type='checkbox' id='60' value='60' name='asiento' ></td>" +
                    "</tr>" +

                    "<tr id='pasillo'>" +
                    "<td>-</td>" +
                        "<td>-</td>" +
                        "<td>-</td>" +
                        "<td>P</td>" +
                        "<td>A</td>" +
                        "<td>S</td>" +
                        "<td>I</td>" +
                        "<td>L</td>" +
                        "<td>L</td>" +
                        "<td>O</td>" +
                        "<td>-</td>" +
                        "<td>-</td>" +
                        "<td>-</td>" +
                    "</tr>" +

                    "<tr id='fila3'>" +
                        "<td><label>14</label><input type='checkbox' id='14' value='14' name='asiento' ></td>" +
                        "<td><label>18</label><input type='checkbox' id='18' value='18' name='asiento' ></td>" +
                        "<td><label>22</label><input type='checkbox' id='22' value='22' name='asiento' ></td>" +
                        "<td><label>24</label><input type='checkbox' id='24' value='24' name='asiento' ></td>" +
                        "<td><label>26</label><input type='checkbox' id='26' value='26' name='asiento' ></td>" +
                        "<td><label>30</label><input type='checkbox' id='30' value='30' name='asiento' ></td>" +
                        "<td><label>34</label><input type='checkbox' id='34' value='34' name='asiento' ></td>" +
                        "<td><label>38</label><input type='checkbox' id='38' value='38' name='asiento' ></td>" +
                        "<td><label>42</label><input type='checkbox' id='42' value='42' name='asiento' ></td>" +
                        "<td><label>46</label><input type='checkbox' id='46' value='46' name='asiento' ></td>" +
                        "<td><label>50</label><input type='checkbox' id='50' value='50' name='asiento' ></td>" +
                        "<td><label>54</label><input type='checkbox' id='54' value='54' name='asiento' ></td>" +
                        "<td><label>58</label><input type='checkbox' id='58' value='58' name='asiento' ></td>" +
                    "</tr>" +

                    "<tr id='fila4'>" +
                        "<td><label>13</label><input type='checkbox' id='13' value='13' name='asiento' ></td>" +
                        "<td><label>17</label><input type='checkbox' id='17' value='17' name='asiento' ></td>" +
                        "<td><label>21</label><input type='checkbox' id='21' value='21' name='asiento' ></td>" +
                        "<td><label>23</label><input type='checkbox' id='23' value='23' name='asiento' ></td>" +
                        "<td><label>25</label><input type='checkbox' id='25' value='25' name='asiento' ></td>" +
                        "<td><label>29</label><input type='checkbox' id='29' value='29' name='asiento' ></td>" +
                        "<td><label>33</label><input type='checkbox' id='33' value='33' name='asiento' ></td>" +
                        "<td><label>37</label><input type='checkbox' id='37' value='37' name='asiento' ></td>" +
                        "<td><label>41</label><input type='checkbox' id='41' value='41' name='asiento' ></td>" +
                        "<td><label>45</label><input type='checkbox' id='45' value='45' name='asiento' ></td>" +
                        "<td><label>49</label><input type='checkbox' id='49' value='49' name='asiento' ></td>" +
                        "<td><label>53</label><input type='checkbox' id='53' value='53' name='asiento' ></td>" +
                        "<td><label>57</label><input type='checkbox' id='57' value='57' name='asiento' ></td>" +
                    "</tr>");

                $("#salon2").hide();
                $("#tipoSalon2").hide();
              
            }

            //Cama en los 2 pisos
            
            if (field.capacidad == 43) {
                //1er Piso
                $("#tipoSalon").append("Salón Cama 1er Piso");

                //1er Piso
                $("#salon").append(
                "<tr id='fila1'>" +
                        "<td><label>34</label><input type='checkbox' id='34' value='34' name='asiento' ></td>" +
                        "<td><label>37</label><input type='checkbox' id='37' value='37' name='asiento' ></td>" +
                        "<td><label>40</label><input type='checkbox' id='40' value='40' name='asiento' ></td>" +
                        "<td><label>43</label><input type='checkbox' id='43' value='43' name='asiento' ></td>" +
                    "</tr>" +

                    "<tr id='pasillo'>" +
                        "<td>PA</td>" +
                        "<td>SI</td>" +
                        "<td>LL</td>" +
                        "<td>O</td>" +
                    "</tr>" +

                    "<tr id='fila2'>" +
                        "<td><label>33</label><input type='checkbox' id='33' value='33' name='asiento' ></td>" +
                        "<td><label>36</label><input type='checkbox' id='36' value='36' name='asiento' ></td>" +
                        "<td><label>39</label><input type='checkbox' id='39' value='39' name='asiento' ></td>" +
                        "<td><label>42</label><input type='checkbox' id='42' value='42' name='asiento' ></td>" +
                    "</tr>" +

                    "<tr id='fila3'>" +
                        "<td><label>32</label><input type='checkbox' id='32' value='32' name='asiento' ></td>" +
                        "<td><label>35</label><input type='checkbox' id='35' value='35' name='asiento' ></td>" +
                        "<td><label>38</label><input type='checkbox' id='38' value='38' name='asiento' ></td>" +
                        "<td><label>41</label><input type='checkbox' id='41' value='41' name='asiento' ></td>" +
                    "</tr>");

                //2d Piso

                $("#tipoSalon2").append("Salón Cama 2do Piso");
                $("#salon2").append(
                "<tr id='fila4'>" +
                        "<td><label>3</label><input type='checkbox' id='3' value='3' name='asiento' ></td>" +
                        "<td></td>" +
                        "<td></td>" +
                        "<td><label>10</label><input type='checkbox' id='10' value='10' name='asiento' ></td>" +
                        "<td><label>13</label><input type='checkbox' id='13' value='13' name='asiento' ></td>" +
                        "<td><label>16</label><input type='checkbox' id='16' value='16' name='asiento' ></td>" +
                        "<td><label>19</label><input type='checkbox' id='19' value='19' name='asiento' ></td>" +
                        "<td><label>22</label><input type='checkbox' id='22' value='22' name='asiento' ></td>" +
                        "<td><label>25</label><input type='checkbox' id='25' value='25' name='asiento' ></td>" +
                        "<td><label>28</label><input type='checkbox' id='28' value='28' name='asiento' ></td>" +
                        "<td><label>31</label><input type='checkbox' id='31' value='31' name='asiento' ></td>" +

                    "</tr>" +

                    "<tr id='pasillo'>" +
                        "<td>-</td>" +
                        "<td>-</td>" +
                        "<td>P</td>" +
                        "<td>A</td>" +
                        "<td>S</td>" +
                        "<td>I</td>" +
                        "<td>L</td>" +
                        "<td>L</td>" +
                        "<td>O</td>" +
                        "<td>-</td>" +
                        "<td>-</td>" +
                    "</tr>" +

                    "<tr id='fila5'>" +
                        "<td><label>2</label><input type='checkbox' id='2' value='2' name='asiento' ></td>" +
                        "<td><label>5</label><input type='checkbox' id='5' value='5' name='asiento' ></td>" +
                       "<td><label>7</label><input type='checkbox' id='7' value='7' name='asiento' ></td>" +
                        "<td><label>9</label><input type='checkbox' id='9' value='9' name='asiento' ></td>" +
                        "<td><label>12</label><input type='checkbox' id='12' value='12' name='asiento' ></td>" +
                        "<td><label>15</label><input type='checkbox' id='15' value='15' name='asiento' ></td>" +
                        "<td><label>18</label><input type='checkbox' id='18' value='18' name='asiento' ></td>" +
                        "<td><label>21</label><input type='checkbox' id='21' value='21' name='asiento' ></td>" +
                        "<td><label>24</label><input type='checkbox' id='24' value='24' name='asiento' ></td>" +
                        "<td><label>27</label><input type='checkbox' id='27' value='27' name='asiento' ></td>" +
                        "<td><label>30</label><input type='checkbox' id='30' value='30' name='asiento' ></td>" +
                    "</tr>" +

                    "<tr id='fila6'>" +
                        "<td><label>1</label><input type='checkbox' id='1' value='1' name='asiento' ></td>" +
                        "<td><label>4</label><input type='checkbox' id='4' value='4' name='asiento' ></td>" +
                        "<td><label>6</label><input type='checkbox' id='6' value='6' name='asiento' ></td>" +
                        "<td><label>8</label><input type='checkbox' id='8' value='8' name='asiento' ></td>" +
                        "<td><label>11</label><input type='checkbox' id=11'' value='11' name='asiento' ></td>" +
                        "<td><label>14</label><input type='checkbox' id='14' value='14' name='asiento' ></td>" +
                        "<td><label>17</label><input type='checkbox' id='17' value='17' name='asiento' ></td>" +
                        "<td><label>20</label><input type='checkbox' id='20' value='20' name='asiento' ></td>" +
                        "<td><label>23</label><input type='checkbox' id='23' value='23' name='asiento' ></td>" +
                        "<td><label>26</label><input type='checkbox' id='26' value='26' name='asiento' ></td>" +
                        "<td><label>29</label><input type='checkbox' id='29' value='29' name='asiento' ></td>" +
                    "</tr>");

            }

            //Semi cama en los 2 pisos
            if (field.capacidad == 64) {
                //1er Piso
                $("#tipoSalon").append("Salón Semi-Cama 1er Piso");

                //1er Piso
                $("#salon").append(
                "<tr id='fila1'>" +
                        "<td><label>3</label><input type='checkbox' id='3' value='3' name='asiento' ></td>" +
                        "<td><label>7</label><input type='checkbox' id='7' value='7' name='asiento' ></td>" +
                        "<td><label>11</label><input type='checkbox' id='11' value='11' name='asiento' ></td>" +
                        "<td><label>15</label><input type='checkbox' id='15' value='15' name='asiento' ></td>" +
                    "</tr>" +

                    "<tr id='fila2'>" +
                        "<td><label>4</label><input type='checkbox' id='4' value='4' name='asiento' ></td>" +
                        "<td><label>8</label><input type='checkbox' id='8' value='8' name='asiento' ></td>" +
                        "<td><label>12</label><input type='checkbox' id='12' value='12' name='asiento' ></td>" +
                        "<td><label>16</label><input type='checkbox' id='16' value='16' name='asiento' ></td>" +
                    "</tr>" +

                    "<tr id='pasillo'>" +
                        "<td>PA</td>" +
                        "<td>SI</td>" +
                        "<td>LL</td>" +
                        "<td>O</td>" +
                    "</tr>" +

                    "<tr id='fila3'>" +
                        "<td><label>2</label><input type='checkbox' id='2' value='2' name='asiento' ></td>" +
                        "<td><label>6</label><input type='checkbox' id='6' value='6' name='asiento' ></td>" +
                        "<td><label>10</label><input type='checkbox' id='10' value='10' name='asiento' ></td>" +
                        "<td><label>14</label><input type='checkbox' id='14' value='14' name='asiento' ></td>" +
                    "</tr>" +

                    "<tr id='fila4'>" +
                        "<td><label>1</label><input type='checkbox' id='1' value='1' name='asiento' ></td>" +
                        "<td><label>5</label><input type='checkbox' id='5' value='5' name='asiento' ></td>" +
                        "<td><label>9</label><input type='checkbox' id='9' value='9' name='asiento' ></td>" +
                        "<td><label>13</label><input type='checkbox' id='13' value='13' name='asiento' ></td>" +
                    "</tr>");

                //2d Piso

                $("#tipoSalon2").append("Salón Semi-Cama 2do Piso");
                $("#salon2").append(
                "<tr id='fila4'>" +
                        "<td><label>19</label><input type='checkbox' id='19' value='19' name='asiento' ></td>" +
                        "<td><label>23</label><input type='checkbox' id='23' value='23' name='asiento' ></td>" +
                        "<td></td>" +
                        "<td></td>" +
                        "<td><label>31</label><input type='checkbox' id='31' value='31' name='asiento' ></td>" +
                        "<td><label>35</label><input type='checkbox' id='35' value='35' name='asiento' ></td>" +
                        "<td><label>39</label><input type='checkbox' id='39' value='39' name='asiento' ></td>" +
                        "<td><label>43</label><input type='checkbox' id='43' value='43' name='asiento' ></td>" +
                        "<td><label>47</label><input type='checkbox' id='47' value='47' name='asiento' ></td>" +
                        "<td><label>51</label><input type='checkbox' id='51' value='51' name='asiento' ></td>" +
                        "<td><label>55</label><input type='checkbox' id='55' value='55' name='asiento' ></td>" +
                        "<td><label>59</label><input type='checkbox' id='59' value='59' name='asiento' ></td>" +
                        "<td><label>63</label><input type='checkbox' id='63' value='63' name='asiento' ></td>" +
                    "</tr>" +

                    "<tr id='fila5'>" +
                        "<td><label>20</label><input type='checkbox' id='20' value='20' name='asiento' ></td>" +
                        "<td><label>24</label><input type='checkbox' id='24' value='24' name='asiento' ></td>" +
                        "<td></td>" +
                        "<td></td>" +
                        "<td><label>32</label><input type='checkbox' id='32' value='32' name='asiento' ></td>" +
                        "<td><label>36</label><input type='checkbox' id='36' value='36' name='asiento' ></td>" +
                        "<td><label>40</label><input type='checkbox' id='40' value='40' name='asiento' ></td>" +
                        "<td><label>44</label><input type='checkbox' id='44' value='44' name='asiento' ></td>" +
                        "<td><label>48</label><input type='checkbox' id='48' value='48' name='asiento' ></td>" +
                        "<td><label>52</label><input type='checkbox' id='52' value='52' name='asiento' ></td>" +
                        "<td><label>56</label><input type='checkbox' id='56' value='56' name='asiento' ></td>" +
                        "<td><label>60</label><input type='checkbox' id='60' value='60' name='asiento' ></td>" +
                        "<td><label>64</label><input type='checkbox' id='64' value='64' name='asiento' ></td>" +
                    "</tr>" +

                     "<tr id='pasillo'>" +
                        "<td>-</td>" +
                        "<td>-</td>" +
                        "<td>P</td>" +
                        "<td>A</td>" +
                        "<td>S</td>" +
                        "<td>I</td>" +
                        "<td>L</td>" +
                        "<td>L</td>" +
                        "<td>O</td>" +
                        "<td>-</td>" +
                        "<td>-</td>" +
                    "</tr>" +

                    "<tr id='fila6'>" +
                        "<td><label>18</label><input type='checkbox' id='18' value='18' name='asiento' ></td>" +
                        "<td><label>22</label><input type='checkbox' id='22' value='22' name='asiento' ></td>" +
                        "<td><label>26</label><input type='checkbox' id='26' value='26' name='asiento' ></td>" +
                        "<td><label>28</label><input type='checkbox' id='28' value='28' name='asiento' ></td>" +
                        "<td><label>30</label><input type='checkbox' id='30' value='30' name='asiento' ></td>" +
                        "<td><label>34</label><input type='checkbox' id='34' value='34' name='asiento' ></td>" +
                        "<td><label>38</label><input type='checkbox' id='38' value='38' name='asiento' ></td>" +
                        "<td><label>42</label><input type='checkbox' id='42' value='42' name='asiento' ></td>" +
                        "<td><label>46</label><input type='checkbox' id='46' value='46' name='asiento' ></td>" +
                        "<td><label>50</label><input type='checkbox' id='50' value='50' name='asiento' ></td>" +
                        "<td><label>54</label><input type='checkbox' id='54' value='54' name='asiento' ></td>" +
                        "<td><label>58</label><input type='checkbox' id='58' value='58' name='asiento' ></td>" +
                        "<td><label>62</label><input type='checkbox' id='62' value='62' name='asiento' ></td>" +
                    "</tr>"+
                    
                    "<tr id='fila7'>" +
                        "<td><label>17</label><input type='checkbox' id='17' value='17' name='asiento' ></td>" +
                        "<td><label>21</label><input type='checkbox' id='21' value='21' name='asiento' ></td>" +
                        "<td><label>25</label><input type='checkbox' id='25' value='25' name='asiento' ></td>" +
                        "<td><label>27</label><input type='checkbox' id='27' value='27' name='asiento' ></td>" +
                        "<td><label>29</label><input type='checkbox' id='29' value='29' name='asiento' ></td>" +
                        "<td><label>33</label><input type='checkbox' id='33' value='33' name='asiento' ></td>" +
                        "<td><label>37</label><input type='checkbox' id='37' value='37' name='asiento' ></td>" +
                        "<td><label>41</label><input type='checkbox' id='41' value='41' name='asiento' ></td>" +
                        "<td><label>45</label><input type='checkbox' id='45' value='45' name='asiento' ></td>" +
                        "<td><label>49</label><input type='checkbox' id='49' value='49' name='asiento' ></td>" +
                        "<td><label>53</label><input type='checkbox' id='53' value='53' name='asiento' ></td>" +
                        "<td><label>57</label><input type='checkbox' id='57' value='57' name='asiento' ></td>" +
                        "<td><label>61</label><input type='checkbox' id='61' value='61' name='asiento' ></td>" +
                    "</tr>");

            } 
        });
    });

    $.getJSON(url + "rest/get_asientoVendido.php?s=" + datos.idServicio, function (result) {
        $.each(result, function (i, field) {
            
            for (i = 0; i < field.capacidad; i++) {
                if (field.asiento == document.getElementById(i + 1).value && field.origenId==datos.idOrigen && field.destinoId==datos.idDestino) {
                    document.getElementById(i + 1).checked = true;
                    document.getElementById(i + 1).disabled = true;
                    console.log("Asiento vendido: "+ field.asiento);
                }
            }
           
        });

    });

    $("#datos").append
        ("<input type='hidden' name='origen' value='" + datos.origen + "'>" +
        "<input type='hidden' name='destino' value='" + datos.destino + "'>" +
        "<input type='hidden' name='salon' value='" + datos.salon + "'>" +
        "<input type='hidden' name='fecha' value='" + datos.fecha + "'>" +
        "<input type='hidden' name='horaSalida' value='" + datos.horaSalida + "'>" +
        "<input type='hidden' name='valor' value='" + datos.valor + "'>" +
        "<input type='hidden' name='idServicio' value='" + datos.idServicio + "'>" +
        "<input type='hidden' name='idSalon' value='" + datos.idSalon + "'>");
});



