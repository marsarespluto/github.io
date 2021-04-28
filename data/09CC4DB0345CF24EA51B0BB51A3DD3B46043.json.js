GS.dataCache['09CC4DB0345CF24EA51B0BB51A3DD3B46043'] = {
    "uid": "09CC4DB0345CF24EA51B0BB51A3DD3B46043",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "anniebedroomnight",
        "type": "data_record",
        "order": 3,
        "category": "commonEvents",
        "id": "09CC4DB0345CF24EA51B0BB51A3DD3B46043",
        "isFolder": false,
        "parentId": "ACEFAA572822D144FE58A5C6C1ADFF4CFD34",
        "data": {
            "name": "anniebedroomnight",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "vn.ChangeBackground",
                    "params": {
                        "viewport": {
                            "type": "scene"
                        },
                        "graphic": {
                            "name": "annieroomnight",
                            "hue": 0,
                            "opacity": 255,
                            "blending": 0,
                            "tone": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "grey": 0
                            }
                        },
                        "layer": 0,
                        "duration": 0,
                        "waitForCompletion": 0,
                        "blendMode": 0,
                        "origin": 0,
                        "zOrder": 0,
                        "loopVertical": 0,
                        "loopHorizontal": 0,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "167C9B6B7C882344FB99C0C778211ED7B7B5",
                    "indent": 0
                },
                {
                    "id": "vn.CharacterJoinScene",
                    "params": {
                        "viewport": {
                            "type": "scene"
                        },
                        "predefinedPositionId": 5,
                        "expressionId": null,
                        "characterId": "EC1069623F2E984B8B5B77C27381A1FDEE20",
                        "zOrder": 0,
                        "origin": 0,
                        "blendMode": 0,
                        "positionType": 0,
                        "motionBlur": {
                            "enabled": 0,
                            "delay": 2,
                            "opacity": 100,
                            "dissolveSpeed": 3
                        },
                        "position": {
                            "x": 0,
                            "y": 0
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 0
                        },
                        "duration": 60,
                        "waitForCompletion": 1,
                        "fieldFlags": {
                            "duration": 0
                        }
                    },
                    "uid": "1B6D417B194EE745ED8B98798E7495CF94CB",
                    "indent": 0
                },
                {
                    "id": "gs.PlayMusic",
                    "params": {
                        "layer": 0,
                        "music": {
                            "name": "Annie",
                            "volume": "50",
                            "playbackRate": 100
                        },
                        "fadeInDuration": 300,
                        "playTime": {
                            "min": 10,
                            "max": 30
                        },
                        "playRange": {
                            "start": 10,
                            "end": 20
                        },
                        "playType": 0,
                        "fieldFlags": {
                            "music.volume": 0,
                            "music.playbackRate": 1,
                            "fadeInDuration": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "7493231A1FD836496F7BEEF3E92F0A2F213A",
                    "indent": 0
                },
                {
                    "id": "vn.MessageBoxVisibility",
                    "params": {
                        "duration": 30,
                        "waitForCompletion": true,
                        "id": "messageBox",
                        "visible": 1,
                        "animation": {
                            "type": 0,
                            "movement": 3,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "duration": 1
                        }
                    },
                    "uid": "A93920553F3F96476C5925767E529B8383AE",
                    "indent": 0
                }
            ],
            "index": "09CC4DB0345CF24EA51B0BB51A3DD3B46043",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ]
        }
    },
    "summary": [
        "name",
        "type",
        "order"
    ]
}